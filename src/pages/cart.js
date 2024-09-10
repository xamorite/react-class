import { useState } from "react";

const Cart = () => {
    const [user, setUser] = useState("Jesse Hall");
    return ( 
        <div>
            <h1>Hello {user}</h1>
            <Child user={user}/>
        </div>
    );
}

const Child = ({user}) => {
    return ( <div>
        <h1>i am a child and i got {user} from my parent component</h1>
    </div> );
}
 

 
export default Cart;