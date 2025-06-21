const app = require('./index.js');
const http = require('http');

// Simple test function
function runTests() {
  console.log('🧪 Running tests...');
  
  // Test 1: Check if app module loads
  if (app) {
    console.log('✅ App module loads successfully');
  } else {
    console.log('❌ App module failed to load');
    process.exit(1);
  }
  
  // Test 2: Simple logic test
  const testData = "Hello CI/CD!";
  if (testData.includes("CI/CD")) {
    console.log('✅ String test passed');
  } else {
    console.log('❌ String test failed');
    process.exit(1);
  }
  
  console.log('🎉 All tests passed!');
}

runTests();