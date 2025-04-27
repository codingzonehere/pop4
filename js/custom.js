var my_modal = document.getElementById('my_modal');
var span_tag = document.getElementById('show_time');
var countdown_call = '';
var time_count = 0;

function showModal(){
  my_modal.style.display = "block";
  // countdown after show
  countdown_call = setInterval(updateTime, 1000); // call for every 1s
}
// now show automatically after 1s
// working
setTimeout(showModal,1000) // 1000ms


// now close 
function closeModal(){
  my_modal.style.display = "none";
}
// setTimeout(closeModal,3000) // 1000ms
// no need

// now countdown time
function updateTime(){
  time_count++;  
  span_tag.innerHTML = time_count;
  if(time_count == 21){
    clearInterval(countdown_call);
    closeModal();
  }

}