import React, { FC, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Link } from '@material-ui/core'

const c: FC = () => {
  return (
    <Table size="small" stickyHeader={ true }>
      <TableHead>
        <TableRow>
          <TableCell style={{ paddingLeft: '22px' }}>名称</TableCell>
          <TableCell>URL</TableCell>
          <TableCell>协议</TableCell>
          <TableCell>类型</TableCell>
          <TableCell>状态</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
      </TableBody>
    </Table>
  )
}

export default c