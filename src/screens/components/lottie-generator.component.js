import React from "react";
import lottie from "lottie-web";

import { ChatContext } from "../../context/chat.context";

export default function LottieGenerator(props) {
  const { state,actions } = React.useContext(ChatContext);
  const effect = React.useRef(null);
  const effectContainer = React.useRef(null);
  
 
  const trigger = () => {
    effectContainer.current.classList.remove("chat-effect-hide");
    effect.current.goToAndPlay(0, true);
  };
  React.useEffect(() => {
    effectContainer.current = document.getElementById("chat-effect");
    effect.current = lottie.loadAnimation({
      wrapper: effectContainer.current,
      animType: 'svg',
      path: props.path,
      loop: false,
      autoplay: false,
      
    });

    effect.current.addEventListener("complete", () => {
      effectContainer.current.classList.add("chat-effect-hide");
    });
  }, []);
  React.useEffect(() => {
   
    if(state.effect){
      trigger();
    }
    return () => {actions.setStateEffect(false)}
    
  },[state.effect])

  return (
    <React.Fragment>
      <div className="chat-effect chat-effect-hide" id="chat-effect"></div>
    </React.Fragment>
  );
}