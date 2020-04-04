import React, {Component} from "react";
import HomeLayout from "../components/HomeLayout";
import Categories from "../../categories/components/Categories";
import Related from "../components/Related";

class Home extends Component{
    render(){
        const {data: {categories}} = this.props;
        return(
            <HomeLayout>
                <Related/> 
                <Categories categories={categories}/>
            </HomeLayout>
        );
    }
}

export default Home;