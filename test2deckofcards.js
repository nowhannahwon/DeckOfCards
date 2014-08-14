
//Calculate Score
function Addscore() {
  var straight = false;
  var flush = false;
  var pairs = 0;
  var three = false;
  var tally = new Array(14);
  //sorted array for convenience
  var nums = new Array(5);
  for (i = 0; i < 5; i++) {
    nums[i] = hand[i+1].num;
  }
  nums.sort(Numsort);
  //flush
  if (hand[1].suit == hand[2].suit &&
      hand[2].suit == hand[3].suit &&
      hand[3].suit == hand[4].suit &&
      hand[4].suit == hand[5].suit) {
    flush = true;
  }
  //straight (Ace low)
  else if (nums[0] == nums[1] - 1 &&
      nums[1] == nums[2] - 1 &&
      nums[2] == nums[3] - 1 &&
      nums[3] == nums[4] - 1 &&) {
    straight = true;
  }
  //straight (Ace high)
  else if (nums[0] == 1 &&
           nums[1] == 10 &&
           nums[2] == 11 &&
           nums[3] == 12 &&
           nums[4] == 13) {
    straight = true;
  }
  //royal flush, straight flush, straight, flush
  else if (straight &&
           flush &&
           nums[4] == 13 &&
           nums[0] == 1) {
    document.form1.message.value = "Royal Flush";
    return 100;
  }
  else if (straight && flush) {
    document.form1.message.value = "Straight Flush";
    return 50;
  }
  else if (straight) {
    document.form1.message.value = "Straight";
    return 4;
  }
  else if (flush) {
    document.form1.message.value = "Flush";
    return 5;
  }
  //tally array is a count for each card value
  for (i = 1; i < 14; i++) {
    tally[i] = 0;
  }
  for (i = 0; i < 5; i++) {
    tally[nums[i]] += 1;
  }
  for (i = 1; i < 14; i++) {
    if (tally[i] == 4) {
      document.form1.message.value = "Four of a Kind";
      return 25;
    }
    else if (tally[i] == 3) {
      three = true;
    }
    else if (tally[i] == 2) {
      pairs += 1;
    }
  }
  if (three && pairs == 1) {
    document.form1.message.value = "Full House";
    return 10;
  }
  else if (pairs == 2) {
    document.form1.message.value = "Two Pair";
    return 2;
  }
  else if (three) {
    document.form1.message.value = "Three of a Kind";
    return 3;
  }
  else if (pairs == 1) {
    if (tally[1] == 2 ||
        tally[11] == 2 ||
        tally[12] == 2 ||
        tally[13] == 2) {
      document.form1.message.value = "Jacks or Better";
      return 1;
    }
  }
  document.form1.message.value = "No Score";
  return 0;
};
