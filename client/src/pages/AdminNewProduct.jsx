import NewProduct from "../component/Admin/NewProduct";
import { Helmet } from 'react-helmet';

function AdminNewProduct () {

  return (
    <>
      <Helmet>
        <title>Administration</title>
      </Helmet>
      <NewProduct />
    </>
  )
}

export default AdminNewProduct;