describe('Prime numbers under 100 array', function(){
  var primes = eratosthenes(100);

  it('is truthy', function(){
    expect(primes).toBeTruthy();
  });

  it('is really an array', function(){
    expect(Array.isArray(primes)).toBe(true);
  });

  it('has 25 primes under 100', function(){
    expect(primes.length).toEqual(25);
  });

  it('contains 5, 11, 43, 97 as primes', function(){
    expect(primes).toContain(5);
    expect(primes).toContain(11);
    expect(primes).toContain(43);
    expect(primes).toContain(97);
  });

  it('does not contain 28, 60, 99', function(){
    expect(primes).not.toContain(28);
    expect(primes).not.toContain(60);
    expect(primes).not.toContain(99);
  });
});



function eratosthenes(n) {
    var detectprimes = new Array(n),
        primes = new Array();
  
    detectprimes[0] = false;
    detectprimes[1] = false;
  
    for(var i=2; i < detectprimes.length; i++)
      detectprimes[i] = true;
  
    for(var p=2; p < Math.sqrt(n); p++) {
      if(detectprimes[p]) {
        for(var j = p*p; j < n; j+= p)
          detectprimes[j] = false;
      }
    }
  
    for (var i = 0; i < n; i++)
      if(detectprimes[i]) primes.push(i);
  
    return primes;
  }