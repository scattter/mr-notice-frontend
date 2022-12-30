export const goBackLoginPage = (): void => {
  const { origin } = window.location
  window.location.href = origin + '/login'
}
