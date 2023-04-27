import features from '@/data/features.json';
import { ApplicationStatus } from '@/types/application';
import slugify from 'slugify';
import type { DeploymentRowFragment } from './__generated__/graphql';

export function getLastLiveDeployment(deployments?: DeploymentRowFragment[]) {
  if (!deployments) {
    return '';
  }

  return (
    deployments.find((deployment) => deployment.deploymentStatus === 'DEPLOYED')
      ?.id || ''
  );
}

export function slugifyString(s: string) {
  return slugify(s, { lower: true, strict: true });
}

export function capitalize(s: string) {
  return s
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export const checkHasuraConsoleStatus = async (subdomain: string) => {
  try {
    const res = await fetch(subdomain);
    return res.status === 200;
  } catch (e) {
    return false;
  }
};

export function isDevOrStaging(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENV === 'dev' ||
    process.env.NEXT_PUBLIC_ENV === 'staging'
  );
}

export type Environment = 'dev' | 'staging' | 'production';

/**
 * It returns the current environment based on the value of the `NEXT_PUBLIC_ENV`
 * environment variable.
 *
 * @returns The current environment
 */
export function getCurrentEnvironment(): Environment {
  return (process.env.NEXT_PUBLIC_ENV || 'dev') as Environment;
}

/**
 * Converts the state number of the application to its string equivalent.
 * @param appStatus The current state of the application.
 */
export function getApplicationStatusString(appStatus: ApplicationStatus) {
  return ApplicationStatus[appStatus];
}

/**
 * Gets relative date by application state of creation/unpausing events.
 * @param date The creation of the application, or when it was paused.
 */
export function getRelativeDateByApplicationState(date: string) {
  const renderedCurrentDate = new Date().getTime();
  const eventCreatedAt = new Date(date).getTime();
  const difference = renderedCurrentDate - eventCreatedAt;

  return Math.floor(difference / 1000);
}

export const isK8SPostgresEnabledInCurrentEnvironment = features[
  'k8s-postgres'
].enabled.find((e) => e === getCurrentEnvironment());
