function canAccessWebsite(age) {
  if (age < 18) {
    return false;
  }
  return true;
}

console.log(canAccessWebsite(18));

const canAccessWebsite2 = (age) => (age < 18 ? false : true);

console.log(canAccessWebsite2(18));
