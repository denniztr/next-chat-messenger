import getUsers from '../actions/get-users';
import Sidebar from '../components/sidebar/sidebar';
import UsersList from './components/users-list';

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <UsersList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
