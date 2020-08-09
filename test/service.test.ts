import 'mocha';
import * as Chai from 'chai';
import { Service } from '../src/service';
import BadRequestException from '../src/badRequestException';
import { createGunzip } from 'zlib';

describe('Service', function () {
  describe('getText', function () {
    it('should return trim the incoming string and return it', function () {
      Chai.expect(new Service().getText('foo   ')).to.equal('foo');
    });
    it('should return unaltered string if no whitespace is present', function () {
      Chai.expect(new Service().getText('foo')).to.equal('foo');
    });
    it('should throw BadRequestException when input is null', function() {
      Chai.expect(() => new Service().getText(null))
        .to.throw(BadRequestException)
    });
    it('should throw BadRequestException when input is undefined', function() {
      Chai.expect(() => new Service().getText(undefined))
        .to.throw(BadRequestException)
    });
    it('should throw BadRequestException when input is empty', function() {
      Chai.expect(() => new Service().getText(''))
        .to.throw(BadRequestException)
    });
  });
});