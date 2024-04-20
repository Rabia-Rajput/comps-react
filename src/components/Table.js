

const Table = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
           <th>Fruit</th> 
           <th>color</th> 
           <th>Score</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Apple</td>
            <td>color-box</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Orange</td>
            <td>color-box</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Banana</td>
            <td>color-box</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Lime</td>
            <td>color-box</td>
            <td>4</td>
        </tr>
      </tbody>
        </table>
  )
}

export default Table;