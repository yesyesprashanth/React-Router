import Navbar from "../components/Navbar";
function Layout(props){
    return<>
        <Navbar />
        <main>
            {props.children}
        </main>
    </>
}

export default Layout;