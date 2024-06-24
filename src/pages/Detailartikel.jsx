// src/DetailArtikel.jsx
import React, { useState } from 'react';
import authorImage from '../assets/Autor/Brian.jpg'; // Pastikan Anda memiliki gambar ini di direktori assets
import graphicDesignImage from '../assets/Autor/VideoPlayer.jpg'; // Pastikan Anda memiliki gambar ini di direktori assets
import './detailartikel.css';

const DetailArtikel = () => {
    const [comments, setComments] = useState([
        {
            author: 'Nyoman',
            time: '2 Days Ago',
            content: 'Artikel ini memberikan gambaran yang jelas dan komprehensif tentang dunia desain grafis, dari pengertian dasarnya hingga jenis-jenisnya. Ini sangat membantu bagi pembaca yang ingin memahami konsep dasar desain grafis.',
            avatarClass: 'nyoman'
        },
        {
            author: 'Kadek',
            time: '2 Days Ago',
            content: 'Penjelasan tentang tugas-tugas dalam desain grafis juga disajikan dengan baik, memberikan wawasan yang berguna bagi yang tertarik untuk mengeksplorasi karir di bidang ini. Informasi ini bisa menjadi panduan awal yang berguna bagi mereka yang ingin memulai karir dalam industri kreatif.',
            avatarClass: 'kadek'
        },
        {
            author: 'Ratih',
            time: '2 Days Ago',
            content: 'Untuk pengembangan lebih lanjut, artikel ini bisa memperkaya kontennya dengan contoh-contoh nyata dari desain grafis dalam berbagai konteks, baik itu desain logo, pemasaran digital, atau desain untuk media sosial. Menyertakan studi kasus akan memberikan pemahaman yang lebih mendalam tentang aplikasi praktis dari konsep-konsep yang dibahas.',
            avatarClass: 'ratih'
        }
    ]);

    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handlePostComment = () => {
        if (newComment.trim()) {
            setComments([
                ...comments,
                {
                    author: 'Anonymous',
                    time: 'Just Now',
                    content: newComment,
                    avatarClass: 'anonymous'
                }
            ]);
            setNewComment('');
        }
    };

    const articles = [
        {
            title: 'Jenis Desain Grafis Paling Populer di Industri Desain',
            author: 'Bagas Wir',
            time: '3 Days Ago',
            category: 'Design Architect',
            avatarClass: 'nyoman' // Replace with actual image path
        },
        {
            title: 'Perkuat Identitas Brand Perusahaan',
            author: 'Wahyu Dika',
            time: '3 Days Ago',
            image: '../assets/Autor/Wahyu.jpg' // Replace with actual image path
        },
        {
            title: 'Kemampuan Fotografi Sebagai Penunjang Pemasaran Digital',
            author: 'Steven Yeun',
            time: '3 Days Ago',
            image: 'p../assets/Autor/Steven.jpg' // Replace with actual image path
        },
        {
            title: 'Peran Foto Produk Sebagai Media Promosi',
            author: 'Darly Dixon',
            time: '3 Days Ago',
            image: '../assets/Autor/Darly.jpg' // Replace with actual image path
        }
    ];

    return (
        <div className="container">
            <header>
                
                    <a>Design Marketing & Architecture  2 Hours ago</a>
            
                <h1>Desain Grafis: Pengertian, Jenis, dan Tugasnya</h1>
                <div className="author">
                    <img src={authorImage} alt="Author" />
                    <span>James</span>
                </div>
                    <div className="metrics">
                        <span>521K</span>
                        <span>213</span>
                        <span>80</span>
                    </div>
            </header>
            <main>
                <figure>
                    <img src={graphicDesignImage} alt="Graphic Design" />
                </figure>
                <article>
                    <p>
                        Apa itu desain grafis? <a href="#">Desain grafis</a> adalah hal yang sangat fenomenal belakangan ini.
                        Sebenarnya, profesi desain grafis sudah ada sejak lama. Akan tetapi, seiring berkembangnya media digital,
                        maka desain grafis semakin menjadi trend pekerjaan yang diminati. Bagaimana tugas dari seorang desainer grafis?
                    </p>
                    <p>
                        Desain grafis adalah suatu bentuk komunikasi yang dilakukan secara visual. Desain grafis akan memanfaatkan
                        suatu gambar sebagai media dalam penyampaian pesan. Informasi yang disampaikan di dalamnya akan dilakukan seefektif mungkin.
                        Desain grafis berasal dari dua kata, yaitu kata desain dan kata grafis. Desain adalah suatu metode perancangan estetika.
                        Metode perancangan ini didasarkan pada kreativitas.
                    </p>
                    <p>
                        Sedangkan grafis memiliki arti ilmu dari sebuah perancangan titik, maupun garis. Maka hal itu akan membentuk sebuah gambar,
                        yang bisa memberikan informasi serta berhubungan dengan proses percetakan. Maka bisa ditarik kesimpulan bahwa desain grafis adalah
                        ilmu yang mengedepankan sebuah kreativitas dalam menciptakan suatu rancangan yang berbentuk gambar. Tujuan akhirnya adalah
                        sebagai kepentingan dari percetakan.
                    </p>
                    <p>
                        Desain grafis adalah satu bentuk seni klasik yang memiliki beberapa tujuan. Seperti untuk mengatur dan menciptakan elemen rupa.
                        Contohnya foto, ilustrasi, tulisan dan garis di atas sebuah media. Hal ini ditujukan untuk sebuah produksi. Selain itu, akan
                        dikomunikasikan juga sebagai sebuah pesan. Bentuk dari seni klasik ini adalah beberapa cabang ilmu desain grafis seperti branding
                        dan tugas dari seorang graphic designer.
                    </p>
                    <p>
                        Graphic designer adalah orang yang memiliki spesialisasi dalam menginterpretasikan pesan dalam bentuk gambar. Dengan kata lain, 
                        seorang graphic designer adalah seorang komunikator visual. Tugasnya untuk menciptakan konsep visual secara manual, atau dapat menggunakan software komputer.
                    </p>
                </article>
            </main>
            <div className="comment-section">
            <textarea
                className="comment-input"
                placeholder="Write your comment in here"
                value={newComment}
                onChange={handleCommentChange}
            ></textarea>
            <button className="post-button" onClick={handlePostComment}>
                Post Comment
            </button>
            <div className="comments">
                {comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <div className={`comment-avatar ${comment.avatarClass}`}></div>
                        <div className="comment-body">
                            <div className="comment-header">
                                <span className="comment-author">{comment.author}</span>
                                <span className="comment-time">{comment.time}</span>
                            </div>
                            <div className="comment-content">{comment.content}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="similar-articles">
            <h2 className="similar-articles-title">Similar Article</h2>
            <div className="main-article">
                <img src={articles[0].image} alt={articles[0].title} className="article-image" />
                <div className="article-info">
                    <div className="article-category">{articles[0].category}</div>
                    <div className="article-title">{articles[0].title}</div>
                    <div className="article-author">{articles[0].author}</div>
                    <div className="article-time">{articles[0].time}</div>
                </div>
            </div>
            <div className="other-articles">
                {articles.slice(1).map((article, index) => (
                    <div className="article" key={index}>
                        <div className={`article-avatar ${article.avatarClass}`}></div>
                        <div className="article-details">
                            <div className="article-title">{article.title}</div>
                            <div className="article-author">{article.author}</div>
                            <div className="article-time">{article.time}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button className="view-all-button">View All</button> */}
        </div>
        </div>
        </div>
    );
};

export default DetailArtikel;
