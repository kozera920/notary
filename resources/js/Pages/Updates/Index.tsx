import { Link, usePage,router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Pagination from '@/Components/Pagination/Pagination';
import FilterBar from '@/Components/FilterBar/FilterBar';
import { Update, PaginatedData } from '@/types';
import Table from '@/Components/Table/Table';
import { Trash2 } from 'lucide-react';

const Index = () => {
  const { updates } = usePage<{
    updates: PaginatedData<Update>;
  }>().props;

  const {
    data,
    meta: { links }
  } = updates;

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
      <h1 className="mb-8 text-3xl font-bold">Updates</h1>
      <div className="flex items-center justify-between mb-6">
        <FilterBar />
        <Link
          className="btn-indigo focus:outline-none"
          href={route('updates.create')}
        >
          <span>Create</span>
          <span className="hidden md:inline"> Update</span>
        </Link>
      </div>
      <Table
        columns={[
          {
            "label":"Created At",
            "name":"created_at",
            "renderCell": row => new Date(row.created_at).toLocaleDateString()+" "+ new Date(row.created_at).toLocaleTimeString()
          },
          {
            label: 'Status',
            name: 'status',
            renderCell: row => (
              <>
                {row.status}
                {row.deleted_at && (
                  <Trash2 size={16} className="ml-2 text-gray-400" />
                )}
              </>
            )
          },
          { label: 'Document', name: 'document.document_name' },
          { label: 'Message', name: 'message' },
        ]}
        rows={data}
        getRowDetailsUrl={row => route('updates.edit', row.id)}
      />
      <Pagination links={links} />
    </div>
  );
};

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Index.layout = (page: React.ReactNode) => (
  <MainLayout title="Updates" children={page} />
);

export default Index;
