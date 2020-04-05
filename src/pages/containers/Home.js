import React, {Component} from "react";
import HomeLayout from "../components/HomeLayout";
import Categories from "../../categories/components/Categories";
import Related from "../components/Related";
import ModalContainer from "../../widgets/containers/ModalContainer";

class Home extends Component{
    render(){
        const {data: {categories}} = this.props;
        return(
            <HomeLayout>
                <Related/> 
                <Categories categories={categories}/>
                <ModalContainer>
                    <h1>Hola papurri</h1>
                </ModalContainer>
            </HomeLayout>
        );
    }
}

export default Home;