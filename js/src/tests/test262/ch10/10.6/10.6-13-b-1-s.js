/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch10/10.6/10.6-13-b-1-s.js
 * @description Accessing caller property of Arguments object throws TypeError in strict mode
 * @onlyStrict
 */


function testcase() {
  'use strict';
  try 
  {
    arguments.caller;
  }
  catch (e) {
    if(e instanceof TypeError)
      return true;
  }
 }
runTestCase(testcase);
