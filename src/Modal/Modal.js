import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button className='md' onClick={() => this.setState({ isOpen: true })}>
          Открыть туториал
        </button>

        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Туториал</h1>
              <p>На этом сайте вы можете добавять задачи</p>
              <button className='md' onClick={() => this.setState({ isOpen: false })}>
                Закрыть окно
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}