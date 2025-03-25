import { Link, usePage, useForm, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import SelectInput from '@/Components/Form/SelectInput';
import { Document } from '@/types';
import FieldGroup from '@/Components/Form/FieldGroup';

const Create = () => {
  const { documents } = usePage<{ documents: Document[] }>().props;
  const { data, setData, errors, post, processing } = useForm({
    status: '',
    message: '',
    document_id: '', 
  });
 
  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'notarized', label: 'Notatized' },
    { value: 'decline', label: 'Declined' },
  ];
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route('updates.store'));
  }

  const { auth } = usePage<{ auth: { user: any } }>().props;
    const userInfo = auth.user;
    //Check if the user is an owner
    if(!userInfo.owner){
      //redirect to dashboard
      router.get(route('dashboard'));
      return;
    }

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          href={route('updates')}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Updates
        </Link>
        <span className="font-medium text-indigo-600"> /</span> Create
      </h1>
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 p-8 lg:grid-cols-2">
            

            <FieldGroup
              label="Document"
              name="document_id"
              error={errors?.document_id}
            >
              <SelectInput
                name="document_id"
                error={errors.document_id}
                value={data.document_id}
                onChange={e => setData('document_id', e.target.value)}
                options={documents?.map(({ id, document_name }) => ({
                  value: String(id),
                  label: document_name
                }))}
              />
            </FieldGroup>

            <FieldGroup
              label="Status"
              name="status" 
              error={errors?.status}
            >
              <SelectInput
                name="status"
                error={errors.status}
                value={data.status}
                onChange={e => setData('status', e.target.value)}
                options={[{
                  value: '',
                  label: ''
                },...statusOptions]}
              />
            </FieldGroup>

            <FieldGroup label="Message" name="message" error={errors.message}>
              <TextInput
                name="message"
                type="text"
                error={errors.message}
                value={data.message}
                onChange={e => setData('message', e.target.value)}
              />
            </FieldGroup>

            
          </div>
          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              className="btn-indigo"
            >
              Create Update
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Create.layout = (page: React.ReactNode) => (
  <MainLayout title="Create Update" children={page} />
);

export default Create;
