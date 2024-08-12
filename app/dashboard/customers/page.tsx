import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import CustomersTable from '@/app/ui/customers/table';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <>
      <CustomersTable customers={customers} />
    </>
  );
}
