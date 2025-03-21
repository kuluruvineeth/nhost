import Form from '@/components/common/Form';
import SettingsContainer from '@/components/settings/SettingsContainer';
import { useUI } from '@/context/UIContext';
import {
  GetAuthenticationSettingsDocument,
  useGetAuthenticationSettingsQuery,
  useUpdateConfigMutation,
} from '@/generated/graphql';
import { useCurrentWorkspaceAndProject } from '@/hooks/v2/useCurrentWorkspaceAndProject';
import ActivityIndicator from '@/ui/v2/ActivityIndicator';
import Input from '@/ui/v2/Input';
import getServerError from '@/utils/settings/getServerError';
import { getToastStyleProps } from '@/utils/settings/settingsConstants';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  enabled: Yup.boolean().label('Enabled'),
  allowedEmails: Yup.string().label('Allowed Emails'),
  allowedEmailDomains: Yup.string().label('Allowed Email Domains'),
});

export type AllowedEmailSettingsFormValues = Yup.InferType<
  typeof validationSchema
>;

export default function AllowedEmailDomainsSettings() {
  const { maintenanceActive } = useUI();
  const { currentProject } = useCurrentWorkspaceAndProject();
  const [updateConfig] = useUpdateConfigMutation({
    refetchQueries: [GetAuthenticationSettingsDocument],
  });

  const { data, loading, error } = useGetAuthenticationSettingsQuery({
    variables: { appId: currentProject?.id },
    fetchPolicy: 'cache-only',
  });

  const { email, emailDomains } = data?.config?.auth?.user || {};

  const form = useForm<AllowedEmailSettingsFormValues>({
    reValidateMode: 'onSubmit',
    defaultValues: {
      enabled: email?.allowed?.length > 0 || emailDomains?.allowed?.length > 0,
      allowedEmails: email?.allowed?.join(', ') || '',
      allowedEmailDomains: emailDomains?.allowed?.join(', ') || '',
    },
    resolver: yupResolver(validationSchema),
  });

  const { register, formState, watch } = form;
  const enabled = watch('enabled');

  const isDirty = Object.keys(formState.dirtyFields).length > 0;

  if (loading) {
    return (
      <ActivityIndicator
        delay={1000}
        label="Loading Allowed Email Settings..."
        className="justify-center"
      />
    );
  }

  if (error) {
    throw error;
  }

  const handleAllowedEmailDomainsChange = async (
    values: AllowedEmailSettingsFormValues,
  ) => {
    const updateConfigPromise = updateConfig({
      variables: {
        appId: currentProject.id,
        config: {
          auth: {
            user: {
              email: {
                blocked: email.blocked,
                allowed:
                  values.enabled && values.allowedEmails
                    ? values.allowedEmails
                        .split(',')
                        .map((allowedEmail) => allowedEmail.trim())
                    : [],
              },
              emailDomains: {
                blocked: emailDomains.blocked,
                allowed:
                  values.enabled && values.allowedEmailDomains
                    ? values.allowedEmailDomains
                        .split(',')
                        .map((allowedEmailDomain) => allowedEmailDomain.trim())
                    : [],
              },
            },
          },
        },
      },
    });

    try {
      await toast.promise(
        updateConfigPromise,
        {
          loading: `Allowed email settings are being updated...`,
          success: `Allowed email settings have been updated successfully.`,
          error: getServerError(
            `An error occurred while trying to update the project's allowed email settings.`,
          ),
        },
        getToastStyleProps(),
      );
    } catch {
      // Note: The toast will handle the error
    }

    form.reset(values);
  };

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleAllowedEmailDomainsChange}>
        <SettingsContainer
          title="Allowed Emails and Domains"
          description="Allow specific email addresses and domains to sign up."
          slotProps={{
            submitButton: {
              disabled: !isDirty || maintenanceActive,
              loading: formState.isSubmitting,
            },
          }}
          docsLink="https://docs.nhost.io/authentication#allowed-emails-and-domains"
          switchId="enabled"
          showSwitch
          className={twMerge(
            'row-span-2 grid grid-flow-row gap-4 px-4 lg:grid-cols-3',
            !enabled && 'hidden',
          )}
        >
          <Input
            {...register('allowedEmails')}
            name="allowedEmails"
            id="allowedEmails"
            placeholder="These emails (separated by comma, e.g, david@ikea.com, lisa@mycompany.com)"
            className="col-span-2"
            label="Allowed Emails (comma separated)"
            fullWidth
            hideEmptyHelperText
          />
          <Input
            {...register('allowedEmailDomains')}
            name="allowedEmailDomains"
            id="allowedEmailDomains"
            label="Allowed Email Domains (comma sepated list)"
            placeholder="These email domains (separated by comma, e.g, ikea.com, mycompany.com)"
            className="col-span-2"
            fullWidth
            hideEmptyHelperText
          />
        </SettingsContainer>
      </Form>
    </FormProvider>
  );
}
