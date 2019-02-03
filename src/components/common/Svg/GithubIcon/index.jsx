import React from 'react'

const GithubIcon = ({ width = '18', height = '18', color = '#fff', className = '' }) => (
	<svg className={className} width={width} height={height} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
		<path fill={color} d="M6 1q1.633 0 3.012.805t2.184 2.184.805 3.012q0 1.961-1.145 3.527t-2.957 2.168q-.211.039-.312-.055t-.102-.234l.004-.598q.004-.575.004-1.051 0-.758-.406-1.109.445-.047.801-.141t.734-.305.633-.52.414-.82.16-1.176q0-.93-.617-1.609.289-.711-.062-1.594-.219-.07-.633.086t-.719.344l-.297.187q-.727-.203-1.5-.203t-1.5.203q-.125-.086-.332-.211t-.652-.301-.664-.105q-.352.883-.062 1.594-.617.68-.617 1.609 0 .664.16 1.172t.41.82.629.523.734.305.801.141q-.305.281-.383.805-.164.078-.352.117t-.445.039-.512-.168-.434-.488q-.148-.25-.379-.406t-.387-.187l-.156-.023q-.164 0-.227.035t-.039.09.07.109.102.094l.055.039q.172.078.34.297t.246.398l.078.18q.102.297.344.48t.523.234.543.055.434-.027l.18-.031q0 .297.004.691t.004.426q0 .141-.102.234t-.312.055q-1.812-.602-2.957-2.168T.001 7.001q0-1.633.805-3.012T2.99 1.805 6.002 1zM2.273 9.617q.023-.055-.055-.094-.078-.023-.102.016-.023.055.055.094.07.047.102-.016zm.243.266q.055-.039-.016-.125-.078-.07-.125-.023-.055.039.016.125.078.078.125.023zm.234.351q.07-.055 0-.148-.062-.102-.133-.047-.07.039 0 .141t.133.055zm.328.328q.062-.062-.031-.148-.094-.094-.156-.023-.07.062.031.148.094.094.156.023zm.445.196q.023-.086-.102-.125-.117-.031-.148.055t.102.117q.117.047.148-.047zm.493.039q0-.102-.133-.086-.125 0-.125.086 0 .102.133.086.125 0 .125-.086zm.453-.078q-.016-.086-.141-.07-.125.023-.109.117t.141.062.109-.109z"/>
	</svg>
)

export { GithubIcon }
