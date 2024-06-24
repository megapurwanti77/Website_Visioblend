// src/components/Article.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image7 from '../assets/image/image7.jpg';
import image8 from '../assets/image/image8.jpg';
import image9 from '../assets/image/image9.jpg';

import './artikel.css'; // Buat file CSS terpisah

const Article = () => {
  const blogCategories = [
    {
      category: 'Design Marketing & Architecture',
      posts: [
        {
          id: '1',
          image: image8,
          createdAt: 'August 18, 2022',
          title: 'Design dan Marketing: Pengertian',
          deskripsi: 'Marketing merupakan sebuah kegiatan bisnis untuk mempromosikan atau menjual produk dan service termasuk didalamnya kegiatan riset dan advertising...',
          author: 'James',
        },
        {
          id: '2',
          image: image9,
          createdAt: 'August 18, 2022',
          title: 'UI/UX: Pengertian',
          deskripsi: 'Marketing merupakan sebuah kegiatan bisnis untuk mempromosikan atau menjual produk dan service termasuk didalamnya kegiatan riset dan advertising...',
          author: 'James',
        },
      ],
    },
    {
      category: 'Fotography',
      posts: [
        {
          id: '2',
          image: image7,
          createdAt: 'July 14, 2022',
          title: 'Fotography: Pengertian',
          deskripsi: 'Fotography berasal dari kata Yunani "photos" untuk cahaya dan "grafo" untuk melukis...',
          author: 'Robert',
        },
      ],
    },
    {
      category: 'Videography',
      posts: [
        {
          id: '3',
          image: image9,
          createdAt: 'June 21, 2022',
          title: 'Videography: Pengertian',
          deskripsi: 'Kata "Videography" berasal dari kata video yang dalam bahasa latin berarti "saya melihat" dan graphy yang berarti menulis menggunakan media cahaya...',
          author: 'Alice',
        },
      ],
    },
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const postsPerPage = 1;
  const currentPosts = blogCategories[currentCategoryIndex].posts.slice(0, postsPerPage);

  return (
    <div className="catalog-container">
      <h1>Article & Learning</h1>
      <p className="description">
        VisioBlend, menawarkan fitur Article & Learning yang bermanfaat bagi masyarakat untuk dapat menjelajahi berbagai artikel dan materi pembelajaran tentang ilmu desain, photography dan videography.
      </p>
      {blogCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category-section">
          <h2>{category.category}</h2>
          <div className="content-wrap">
            {currentPosts.map((post) => (
              <NavLink to={`/detail/${post.id}`} key={post.id} className="blog">
                <div className="blog-content">
                  <div className="image-wrapper">
                    <img src={post.image} alt={post.title} className="image" />
                    <div className="author-date">
                      <img
                        className="author-img"
                        src={`https://ui-avatars.com/api/?name=${post.author}`}
                        alt={post.author}
                      />
                      <div className="author-info">
                        <p className="author-name">{post.author}</p>
                        <p className="date">{post.createdAt}</p>
                        {/* <div className="bookmark">
    <img
      src= {{bookmark}} // Ganti URL dengan ikon bookmark yang Anda inginkan
      alt="Bookmark"
    />
  </div> */}
                      </div>
                      </div>
                    </div>
                    <div className="post-info">
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-desc">{post.deskripsi}</p>
                    </div>
                  </div>
              </NavLink>
            ))}
          </div>
          <section className="pagination">
            <div className="page-number">
              {[...Array(Math.ceil(category.posts.length / postsPerPage)).keys()].map((page) => (
                <div
                  onClick={() => setCurrentCategoryIndex(categoryIndex)}
                  key={page}
                  className={page === currentCategoryIndex ? "selected-number" : ""}
                >
                  <span>{page + 1}</span>
                </div>
              ))}
              <div className="next">next</div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Article;
