export const formatCount = (count) => {

    if (count < 1000) {
      let newCount = count.toString();
      return `${newCount}`
    }
    else if (count < 1000000) {
      let [first,second] = (count / 1000).toFixed(1).toString().split(".")
      if(second === "0") return `${first}K`
      else return `${first},${second}K`
    }
   
    else{
        let [first,second] = (count /1000000).toFixed(1).toString().split(".")
        if(second === "0") return `${first}M`
        else return `${first},${second}M`
    }
  
  }