try {
  const admin = require('firebase-admin');
  console.log('OK: firebase-admin loaded, version:', admin.SDK_VERSION || 'unknown');
} catch (e) {
  console.log('FAIL:', e.message);
  console.log('code:', e.code);
}
