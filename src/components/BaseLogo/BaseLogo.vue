<template>
  <div class="base-logo">
    <div class="main">
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
        <circle cx="11.5" cy="11.5" r="11.5" fill="var(--color-gray-1)"/>
        <path d="M13.72168,16.5V12.37793H9.27881V16.5H7.21436V6.63574H9.27881v3.97852h4.44287V6.63574h2.06445V16.5Z" fill="#fff"/>
      </svg>
      <div class="text">Homebrowse</div>
    </div>
    <div class="badge">Beta</div>
  </div>
</template>

<style lang="scss" scoped>
.base-logo {
  position: relative;
  width: 100%;
  height: 1em;
  display: flex;
  align-items: center;
}
.main {
  position: relative;
  display: flex;
  align-items: center;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-1);
  font-size: 14px;
  cursor: pointer;
}
.main::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: calc(-1 * var(--spacing-5));
  left: calc(-1 * var(--spacing-4));
  padding: var(--spacing-5) var(--spacing-4);
}
.logo {
  height: 1.5em;
  margin-right: var(--spacing-4);
}
.text {
  position: relative;
}
.badge {
  margin-left: var(--spacing-4);
  border-radius: var(--border-radius-3);
  background: var(--color-blue-1);
  color: var(--color-white-1);
  text-transform: uppercase;
  padding: 2px 4px;
  font-size: 10px;
  pointer-events: none;
}
.main:hover .logo circle { fill: var(--color-black-2) }
.main:hover .text { color: var(--color-black-2) }
.logo circle { transition: fill 200ms ease-in-out }
.text { transition: color 200ms ease-in-out }
</style>
