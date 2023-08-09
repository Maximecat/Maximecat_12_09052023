import './Error.css'

function Error() {

    return (
        <div className='error-component'>
            <h1 className='error-title'>Oups !</h1>
            <span className='error'>La page que vous recherchez semble introuvable.</span>
            <span className='error-code'>Code d'erreur: 404</span>
            <div className='backhome-sentence'> Voici un lien de retour à la
                <a href='http://localhost:3001/' className='backhome-link'> Page d'acceuil</a>
            </div>
        </div>
    )
}

export default Error