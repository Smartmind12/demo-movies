import React from 'react'

const Toggle = () => {
  const [currentTheme, setCurrentTheme] = React.useState()

  React.useEffect(() => {
    setCurrentTheme(localStorage.getItem('theme') || 'dark')
  }, [currentTheme, setCurrentTheme])

  const getNextTheme = () => (currentTheme === 'dark' ? 'light' : 'dark')

  return (
    <button
      onClick={() => {
        setCurrentTheme(getNextTheme())
        window.__setPreferredTheme(getNextTheme())
      }}
    >
      {`Switch to ${getNextTheme()} mode`}
    </button>
  )
}

export default Toggle