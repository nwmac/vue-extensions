import HelloWorld from './components/HelloWorld'

export default function() {
  console.log('Extension loaded');

  return {
    Lazy: () => import ('./components/Lazy.vue'),
    HelloWorld,
    Options: [
      'Lazy',
      'HelloWorld'
    ]
  };
}
