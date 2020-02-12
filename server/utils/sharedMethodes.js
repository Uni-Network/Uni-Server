export function paginate(page = 0, limit = 10) {
  const offset = page * limit;

  return {
    offset,
    limit,
  };
}
export function handleError(e) {
  throw (e);
}
 

export function randomString(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}