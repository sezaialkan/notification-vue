const diffDate = (date) => {
        
    const now = new Date()
    let coming = new Date(date)
    const time = now-coming

    let result = {}

    if(time > 0){
        result = {
            days: Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((time % (1000 * 60)) / 1000)
        }
    } 
    
    if(result.minutes < 1){
        return result.seconds +' seconds ago'
    }else if(result.hours < 1){
        return result.minutes +' minutes ago'
    }else if(result.days < 1){
        return result.hours +' hours ago'
    }else{
        return result.days +' days ago'
    }

}

export default diffDate