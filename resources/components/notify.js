export function notify(type, message, duration = 3000){
  let toast = document.getElementById('notification');

  //Create if missing
  if(!toast){
    toast = document.createElement('div');
    toast.id = 'notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;

  //Reset to hidden state
  toast.className = 'fixed top-5 right-5 p-4 rounded shadow-lg text-white z-50 w-max max-w-sm text-center ' +
            'opacity-0 -translate-x-2 transition-all duration-500 pointer-events-none';

  //Apply type-specific  styles
  switch(type){
    case 'success' : toast.classList.add('bg-green-500'); break;
    case 'error': toast.classList.add('bg-red-500'); break;
    case 'warning': toast.classList.add('bg-yellow-500', 'text-black'); break;
    case 'info': toast.classList.add('bg-blue-500'); break;
    default: toast.classList.add('bg-gray-500');
  }

  //Trigger animation by forcing reflow and then adding show state
  toast.offsetHeight; // Force reflow
  toast.classList.add('opacity-100', '-translate-x-2', 'pointer-events-auto');

  //Hide after duration with animation
  setTimeout(() => {
    toast.classList.remove('opacity-100', '-translate-x-2', 'pointer-events-auto');
  }, duration)
}