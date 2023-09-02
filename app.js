// 원래 함수
async function waitAndMaybeReject() {
  // Wait one second
  await new Promise((r) => setTimeout(r, 1000));
  // Toss a coin
  const isHeads = Boolean(Math.round(Math.random()));

  if (isHeads) return "yay";
  throw Error("Boo!");
}

// 그냥 함수를 호출하는 경우
async function a() {
  try {
    waitAndMaybeReject();
  } catch (e) {
    return "caught";
  }
}

// return 사용
async function b() {
  try {
    return waitAndMaybeReject();
  } catch (e) {
    return "caught";
  }
}

// return await 사용
async function c() {
  try {
    return await waitAndMaybeReject();
  } catch (e) {
    return "caught";
  }
}

async function d() {
  try {
    await waitAndMaybeReject();
  } catch (e) {
    return "caught!";
  }
}

// 각 함수를 호출하고 결과를 출력
a()
  .then((result) => console.log(`a() result: ${result}`))
  .catch((e) => console.log(`a() error: ${e.message}`));
b()
  .then((result) => console.log(`b() result: ${result}`))
  .catch((e) => console.log(`b() error: ${e.message}`));
c()
  .then((result) => console.log(`c() result: ${result}`))
  .catch((e) => console.log(`c() error: ${e.message}`));
d()
  .then((result) => console.log(`d() result: ${result}`))
  .catch((e) => console.log(`d() error: ${e.message}`));
