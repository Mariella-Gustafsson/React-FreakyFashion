import ProductTable from "../component/Admin/ProductTable";
import { Helmet } from 'react-helmet';

function AdminList () {

  return (
    <>
      <Helmet>
        <title>Administration</title>
      </Helmet>
      <ProductTable />
    </>
  )
}

export default AdminList;