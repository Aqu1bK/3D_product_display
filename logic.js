/* Modelry 3-D viewer loader */
(function(ar,s,e,n,a,l){
  ar.arsenal=[{
    uid: 'SKU_ABC12469235',
    user: 'aquibs_work',
    target: '.embed-viewer',
    viewer: '3D',
    gltf: 'cyberpunk_car.glb',
    usdz: 'Cyberpunk_car.usdz',
    preview: 'Toy car Screenshot 2025-07-22 131227.png',
    name: 'toy car',
    token: 'f8tRfndvWECasXQrccSUkS1R'
  }];
  a = s.querySelector('body');
  l = s.createElement('script');
  l.async = 1;
  l.src = e + '@1';
  a.appendChild(l);
})(window,document,'https://unpkg.com/cgloader');