import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'


export default function FirstPost() {
	return (

<Layout>	
	<div className="container">
      	<Head>
        	<title>First Post</title>
        	
      	</Head>
		
		<h1>First Post</h1>
		 <h2>
		  Sample text
		</h2>

	</div>
</Layout>

		)
}



