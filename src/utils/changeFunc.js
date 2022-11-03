const changeSeg = (seg) => {
  if (seg == 'C') {
    return '소형';
  } else if (seg == 'D') {
    return '중형';
  } else if (seg == 'E') {
    return '대형';
  } else {
    return 'SUV';
  }
}

const changeFuelType = (type) => {
  if (type == 'gasoline') {
    return '가솔린';
  } else if (type == 'ev') {
    return '전기';
  } else {
    return '하이브리드';
  }
}
export {changeSeg, changeFuelType}