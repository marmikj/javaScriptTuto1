import { connect } from "react-redux";
import Header from "../Components/Header";
import { addToCart } from "../Services/Actions/Action";

const mapStateToProps = state => ({
    data:state.cardItem
})
const mapDispatchToProps=dispatch=>({
    

})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home