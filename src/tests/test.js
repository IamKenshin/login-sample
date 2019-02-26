import React from 'react'
import Enzyme from 'enzyme'
import {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'
import Register from '../containers/register/index.js'
import ReactTestUtils from 'react-dom/test-utils'

var assert = require('assert');
describe('Register', function() {
  describe('validateEmail(event)', function() {
    it('should change the error span class to errorMsg when email is invalid format', function() {
      Enzyme.configure({adapter: new Adapter()})
      const wrapper = mount(<Register />);
      const emailInput = wrapper.find('input').at(2);
      let span = wrapper.find('span').at(0);      
      const testHeader = wrapper.find('h1').at(0);
      emailInput.simulate('blur', {target: {value: 'TESTING'}})
      span.update();
      span = wrapper.find('span').at(0); 
      expect(span.props().className).equal('errorMsg')
    });
  });
});

describe('Register', function() {
  describe('#validateEmail(event)', function() {
    it('should change the error span class to hideError when email is valid format', function() {
      Enzyme.configure({adapter: new Adapter()})
      const wrapper = mount(<Register />);
      const emailInput = wrapper.find('input').at(2);
      let span = wrapper.find('span').at(0);      
      emailInput.simulate('blur', {target: {value: 'bob@cat.com'}})
      span.update();
      span = wrapper.find('span').at(0); 
      expect(span.props().className).equal('hideError')
    });
  });
});

describe('Register', function() {
  describe('#validatePassword(event)', function() {
    it('should change the error span class to errorMsg when password is less than 5 characters', function() {
      Enzyme.configure({adapter: new Adapter()})
      const wrapper = mount(<Register />);
      const emailInput = wrapper.find('input').at(3);
      let span = wrapper.find('span').at(1);      
      emailInput.simulate('blur', {target: {value: '1234'}})
      span.update();
      span = wrapper.find('span').at(1); 
      expect(span.props().className).equal('errorMsg')
    });
  });
});

describe('Register', function() {
  describe('#validatePassword(event)', function() {
    it('should change the error span class to errorMsg when password is greater than 20 characters', function() {
      Enzyme.configure({adapter: new Adapter()})
      const wrapper = mount(<Register />);
      const emailInput = wrapper.find('input').at(3);
      let span = wrapper.find('span').at(1);      
      emailInput.simulate('blur', {target: {value: '1234567891234567891234567'}})
      span.update();
      span = wrapper.find('span').at(1); 
      expect(span.props().className).equal('errorMsg')
    });
  });
});

describe('Register', function() {
  describe('#validatePassword(event)', function() {
    it('should change the error span class to hideError when password is valid length', function() {
      Enzyme.configure({adapter: new Adapter()})
      const wrapper = mount(<Register />);
      const emailInput = wrapper.find('input').at(3);
      let span = wrapper.find('span').at(1);      
      emailInput.simulate('blur', {target: {value: '12345'}})
      span.update();
      span = wrapper.find('span').at(1); 
      expect(span.props().className).equal('hideError')
    });
  });
});

