import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import AdminPanel from "./Pages/AdminPanel/AdminPanel/AdminPanel";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AddBlog from "./Pages/AddBlog/AddBlog";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import EditBlog from "./Pages/AdminPanel/EditBlog/EditBlog";
import AdminRoute from "./Pages/AdminRoute/AdminRoute";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <PrivateRoute path="/adminPanel">
                        <AdminPanel />
                    </PrivateRoute>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <PrivateRoute path="/addBlog">
                        <AddBlog />
                    </PrivateRoute>
                    <PrivateRoute exact path="/blogDetail/:id">
                        <BlogDetail />
                    </PrivateRoute>
                    <PrivateRoute path="/editBlog/:id">
                        <EditBlog />
                    </PrivateRoute>
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
