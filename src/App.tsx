import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import { PostList } from "./posts";
import { UserList } from "./Users";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);
