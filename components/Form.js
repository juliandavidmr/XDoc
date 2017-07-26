import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  container: {
    padding: 20,
  },
  form: {
    textAlign: 'center',
  },
  card: {
    padding: 0,
    width: '100%',
    maxWidth: 345,
    margin: '0 auto'
  },
  select: {
    textAlign: 'left',
  }
}

class Form extends Component {
  static getInitialProps({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { userAgent }
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      categoria: 0,
      programa: 0,
      semestre: 0
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    })
  }

  handleChangeCategoria = (event, index, value) => this.setState({ categoria: value });
  handleChangePrograma = (event, index, value) => this.setState({ programa: value });
  handleChangeSemestres = (event, index, value) => this.setState({ semestre: value });

  elementCategorias = () => {
    return <div>
      <SelectField
        floatingLabelText="Categorias"
        value={this.state.categoria}
        onChange={this.handleChangeCategoria}
        style={styles.select}>
        <MenuItem value={1} primaryText="Categoria 1" />
        <MenuItem value={2} primaryText="Categoria 2" />
        <MenuItem value={3} primaryText="Categoria 3" />
        <MenuItem value={4} primaryText="Categoria 4" />
      </SelectField>
    </div>
  }

  elementProgramas = () => {
    return <div>
      <SelectField
        floatingLabelText="Programas"
        value={this.state.programa}
        onChange={this.handleChangePrograma}
        style={styles.select}>
        <MenuItem value={1} primaryText="Programa 1" />
        <MenuItem value={2} primaryText="Programa 2" />
        <MenuItem value={3} primaryText="Programa 3" />
        <MenuItem value={4} primaryText="Programa 4" />
      </SelectField>
    </div>
  }

  elementSemestres = () => {
    return <div>
      <SelectField
        floatingLabelText="Semestres"
        value={this.state.semestre}
        onChange={this.handleChangeSemestres}
        style={styles.select}>
        <MenuItem value={1} primaryText="semestre 1" />
        <MenuItem value={2} primaryText="semestre 2" />
        <MenuItem value={3} primaryText="semestre 3" />
        <MenuItem value={4} primaryText="semestre 4" />
      </SelectField>
    </div>
  }


  render() {
    const { userAgent } = this.props

    const standardActions = (
      <FlatButton
        label='Ok'
        primary={Boolean(true)}
        onTouchTap={this.handleRequestClose}
      />
    )

    return (
      <div style={styles.container}>
        <Card style={styles.card}>
          <CardHeader
            title="XDoc"
            subtitle="Generador de documentos XML para Moodle"
            avatar="http://scontent.cdninstagram.com/t51.2885-15/e35/16906966_252845611834432_8444471651776593920_n.jpg?ig_cache_key=MTQ1NTYxODMwOTUyMTYxMTI4NA%3D%3D.2"
          />
          <Dialog
            open={this.state.open}
            title='Listo'
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <CardText style={styles.form}>
            <div>
              <TextField
                hintText="Unidad"
                floatingLabelText="Nombre de Unidad"
              />
              <TextField
                hintText="Imagen"
                floatingLabelText="Imagen de fondo"
              />
              <DatePicker
                hintText="Fecha inicial"
                container="inline"
                DateTimeFormat={Intl.DateTimeFormat}
                locale='es-ES'
                mode="landscape" />
              <DatePicker
                hintText="Fecha final"
                container="inline"
                DateTimeFormat={Intl.DateTimeFormat}
                locale='es-ES'
                mode="landscape" />
              {this.elementCategorias()}
              {this.elementProgramas()}
              {this.elementSemestres()}
            </div>
            <br />
            <br />
            <RaisedButton
              label='Super Secret Password'
              secondary
              onTouchTap={this.handleTouchTap}
            />
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Form