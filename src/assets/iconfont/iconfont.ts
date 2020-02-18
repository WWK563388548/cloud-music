import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('iconfont.eot?t=1581992172068'); /* IE9 */
    src: url('iconfont.eot?t=1581992172068#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPgAAsAAAAACBwAAAOUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDXIMnATYCJAMQCwoABCAFhG0HQxsUBxFVnDnIfhTGzXRxRWMUldHR5ZuI9l/eal/i4b/92n0zs5/ZxSRJEo0cqnc2ETWJlkrSkIgcSqBRAqd7CfyfXfWr1j0LEqnE7KRGeHY4b/z6tSFeCWVDOotU7dpP3r/z/T7DdFomJUKE0PB5rqm3Es9vW7tENVVS8dHeAEcJNNAOXIMNJIEmyBvGLmiJ+wl0TFsRO96BkVAV5rBAXOTlpEHNOJWG0lCFpmJuEffAo6Zb/BDAXfD9+APz4CdpZebYbrZXJmx8MP14wNXKaZXoEaCazg+2iIwVFOKkMngMOcqsyDrqb4o1VFXi0/TD368DDgeqj2Ks1l8eSchEwyzuA6vIkC9M5fBIfP7lEXwdmDwkrQyuaPAE4B0xJp8pZKkrKNQ3IthARxPrj7Xp/sjFh7oEGUlSahRlc8JooHnauv9Utn99ekFl5sRgZENGZuRC58GA39KZlNTQmtTakdLU3OQqMX5OHJKq8ExZHTExC0yDaP9w2whLbGCodTBqcJBIGyMjv4zYUOmGBRQVNUsaRrlGn5IETUczTBRJRpbIQl1M+iFtfi8KHGQVoTyfl4HaOwHaL33yUFaxwD4OFb4ildI8XN/82tpCJHJwf6pw/z3yaZB/eNcxpk58tJfNq9PfMq7Dy+5dxXUxjncfyjf4oPf3FZ46dN3N3f3XGw9XpTRS5ArstpIIgVexDQEvzHrIFymgQ4KtXGK9lWhdF9sA8qYKT07gKi61+LeLa79XNnXD5A2r8MQkrrIqJyaqHONQbS1yxeNra+JwPK6p2T6uphZuAP6vcgeXKyC/4B4Iwrv49r/2sz+udydFxPE/P+u5Gj7K8r6iyP8Vtxim/Dmqzqq/qOpYVTSN6SpF0TpKPVx038WQhI4O/l2BEb8pzOOdiwnVeIKkxxSyaoZSGCto6bWKRrWOjmXnxb1GaVNR2ljyAghD3kgGvCEb8qEUxhctE/5oDMUUHXuxXbPXXNSbvUZqUVD2pDrnQdgeuwlLLyhdl+q0JmA+oE0dp9jYNJ8/Y4CeYoLxZWKtIKG5pxM4DF3HJDU3yG1QWSt3oUl21Z2CnPvRxjYNUhYUSOaJ1HJsILz61qbw+QsoOZ2UbiBVpR9AM+ruSSwQdaCcjUMn0q0cY3ilhGUJRNBYj5yAHzorw4is7tWAnBWoBqSknRDVEl2NwfLm/g13QId5gxIpcpRoaZ8gLWTFA2Y9BrcwSHVejUY=') format('woff2'),
    url('iconfont.woff?t=1581992172068') format('woff'),
    url('iconfont.ttf?t=1581992172068') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1581992172068#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-menu:before {
    content: "\e630";
  }

  .icon-search:before {
    content: "\e7b3";
  }

  .icon-headphone:before {
    content: "\e6f3";
  }
`;
