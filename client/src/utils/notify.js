import { toast,ToastContainer } from 'react-toastify';

import React from 'react';

export default function notify(message,type){

    toast[type](message, {
      position: toast.POSITION.BOTTOM_CENTER
    });

  }

// export default function sayHello(){
//     alert("HELLO WORLD")
// }