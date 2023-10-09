var popA = 80000;
var taxaCresA = 0.03;
var popB = 200000;
var taxaCresB = 0.015;
var years = 0;

while (popA < popB) {
  popA += popA * taxaCresA;
  popB += popuB * taxaCresB;
  years++;
}

alert("Vai levar "+years + " anos pra a população do país A poder ultrapassar ou igualar a população do país B.");