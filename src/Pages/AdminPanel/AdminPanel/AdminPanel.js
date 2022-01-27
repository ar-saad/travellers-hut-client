import * as React from "react";
import { Switch, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import ManageBlogs from "../ManageBlogs/ManageBlogs";
import PendingBlogs from "./../PendingBlogs/PendingBlogs";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import EditBlog from "./../EditBlog/EditBlog";

const AdminPanel = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const drawer = (
        <div className="flex md:flex-col justify-between ">
            {admin && (
                <div>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/manageBlogs`}
                    >
                        Manage Blogs
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/pendingBlogs`}
                    >
                        Pending Blogs
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/makeAdmin`}
                    >
                        Make Admin
                    </Link>
                </div>
            )}
        </div>
    );

    return (
        <div className="grid grid-cols-12 gap-5" style={{ minHeight: "500px" }}>
            <div className="col-span-12 md:col-span-2 p-5 bg-green-400">
                {drawer}
            </div>
            <div className="col-span-12 md:col-span-10 py-10">
                <Switch>
                    <AdminRoute exact path={`${path}/`}>
                        <ManageBlogs />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageBlogs`}>
                        <ManageBlogs />
                    </AdminRoute>
                    <AdminRoute path={`${path}/pendingBlogs`}>
                        <PendingBlogs />
                    </AdminRoute>
                    <AdminRoute path={`${path}/editBlog/:id`}>
                        <EditBlog />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default AdminPanel;
