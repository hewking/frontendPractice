function test() {
  let a = 2;
  let canAudit = false;
  let needAudit = a === 2 && canAudit;

  let user = {
    jcOld: false,
  };

  let b = 3;

  let needAudit2 = b === 2 && a === 2 && (user.jcOld ? canAudit : true);

  console.log("needAudit", needAudit);
  console.log("needAudit2", needAudit2);
}

test();
