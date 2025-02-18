import { Breadcrumb } from "antd"
import constantRoutes from "../routers/index";
import { useLocation } from "react-router-dom";
const BreadcrumbBox = () => {
    const location = useLocation()
    const flatRoutes = constantRoutes.flatMap(item => item.children).flat().filter(item => item);
    const pathNames = location.pathname.split("/");
    const currentPath1 = pathNames[pathNames.length - 1]
    const currentPath2 = pathNames[pathNames.length - 2]
    const currentPathObj1 = flatRoutes.find(item => item.key === currentPath1)
    const currentPathObj2 = flatRoutes.find(item => item.key === currentPath2)
    const breadcrumbList = (currentPathObj1?.meta?.breadcrumb || currentPathObj2?.meta?.breadcrumb|| [])
    return <>{
        breadcrumbList.length ? <Breadcrumb
            className="mx-4 mb-4"
            items={breadcrumbList}
        /> : ''
    }
    </>
}

export default BreadcrumbBox;