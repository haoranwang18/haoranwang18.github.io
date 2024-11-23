---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "<https://cdn.jsdelivr.net/gh/>" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "<https://raw.githubusercontent.com/>" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a third-year Ph.D. candidate at Illinois Institute of Technology advised by Dr. <a href="http://www.cs.iit.edu/~kshu/">Kai Shu</a>. I obtained my M.S. degree in computer science from University of Oregon in 2021 (advised by Dr. <a href="https://ix.cs.uoregon.edu/~thien/">Thien Nguyen</a>), and my B.S. degree in computer science from Purdue University in 2019 (working with Dr. <a href="https://yhlu.net/">Yung-Hsiang Lu</a>).

> I am actively seeking industry research internship for Summer 2025.

# 💡 Research

My research involves building trustworthy AI systems, with a specific emphasis on enhancing both robustness and interpretability. I am broadly interested in fundamental research and interdisciplinary collaborations motivated by important applications, including detecting misinformation and analyzing social network.

# 🔥 News

- _2024.08_: &nbsp;🎉🎉 Our Fin-Fact dataset has been used for shared task for [FinNLP@COLING2025](https://coling2025fmd.thefin.ai/).
- _2024.07_: &nbsp;🎉🎉 One paper has been accepted by [CIKM 2024](https://arxiv.org/abs/2311.09433).
- _2024.05_: &nbsp;🎉🎉 One paper has been accepted by [ICML 2024](https://arxiv.org/pdf/2401.05561).
- _2024.02_: &nbsp;🎉🎉 Passed Ph.D. Qualifying Exam.

# 📝 Publications

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">COLING 2025</div><img src='images/coling25.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Piecing It All Together: Verifying Multi-Hop Multimodal Claims](https://arxiv.org/abs/2411.09547)

**Haoran Wang**, Aman Rangapur, Xiongxiao Xu, Yueqing Liang, Haroon Gharwi, Carl Yang, Kai Shu

_Proceedings of the 31st International Conference on Computational Linguistics_

[**GitHub**](https://github.com/mmcv-dataset/MMCV) ![](https://img.shields.io/github/stars/mmcv-dataset/MMCV) &nbsp;&nbsp; [![Leaderboard](https://img.shields.io/badge/Leaderboard-%F0%9F%9A%80-brightgreen)](https://mmcv-dataset.github.io/)

</div>
</div> -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CIKM 2024</div><img src='images/cikm24.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Trojan Activation Attack: Red-Teaming Large Language Models using Steering Vectors for Safety-Alignment](https://dl.acm.org/doi/10.1145/3627673.3679821)

**Haoran Wang**, Kai Shu

_Proceedings of the 33rd ACM International Conference on Information and Knowledge Management_

[**GitHub**](https://github.com/wang2226/Trojan-Activation-Attack) ![](https://img.shields.io/github/stars/wang2226/Trojan-Activation-Attack)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/icml24.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[TrustLLM: Trustworthiness in Large Language Models](https://proceedings.mlr.press/v235/huang24x.html)

Yue Huang\*, Lichao Sun\*, **Haoran Wang\***, Siyuan Wu\*, Qihui Zhang\*, Chujie Gao\*, Yixin Huang\*, Wenhan Lyu\*, Yixuan Zhang\*, Xiner Li\*, Zhengliang Liu\*, Yixin Liu\*, Yijue Wang\*, Zhikun Zhang\*, Bhavya Kailkhura, Caiming Xiong, et al. (\*: major contribution).

_Proceedings of the Forty-first International Conference on Machine Learning_

[**GitHub**](https://github.com/HowieHwong/TrustLLM) ![](https://img.shields.io/github/stars/HowieHwong/TrustLLM) &nbsp;&nbsp; [![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue)](https://trustllmbenchmark.github.io/TrustLLM-Website/) &nbsp;&nbsp; [![Toolkit Document](https://img.shields.io/badge/Toolkit%20Document-%F0%9F%93%9A-blueviolet)](https://howiehwong.github.io/TrustLLM/) &nbsp;&nbsp; [![Downloads](https://static.pepy.tech/badge/trustllm)](https://pepy.tech/project/trustllm)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2023</div><img src='images/emnlp23.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Explainable Claim Verification via Knowledge-Grounded Reasoning with Large Language Models](https://aclanthology.org/2023.findings-emnlp.416/)

**Haoran Wang**, Kai Shu

_Findings of the Association for Computational Linguistics: EMNLP 2023_

[**GitHub**](https://github.com/wang2226/FOLK) ![](https://img.shields.io/github/stars/wang2226/FOLK) &nbsp;&nbsp; [![appear](https://img.shields.io/badge/NILLI_Workshop-@EMNLP23-brown)](https://www.cs.mcgill.ca/~pparth2/nilli_workshop_2023/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">WWW 2023</div><img src='images/www23.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Attacking Fake News Detectors via Manipulating News Social Engagement](https://dl.acm.org/doi/10.1145/3543507.3583868)

**Haoran Wang**, Yingtong Dou, Canyu Chen, Lichao Sun, Philip S. Yu, Kai Shu

_Proceedings of the ACM Web Conference 2023_

[**GitHub**](https://github.com/hwang219/AttackFakeNews) ![](https://img.shields.io/github/stars/hwang219/AttackFakeNews) &nbsp;&nbsp; [![video](https://img.shields.io/badge/Video-8A2BE2)](https://vimeo.com/817846141?share=copy) &nbsp;&nbsp; [![report](https://img.shields.io/badge/Reported%20By-MAIEI-teal)](https://montrealethics.ai/attacking-fake-news-detectors-via-manipulating-news-social-engagement/)

</div>
</div>

## Preprints

- [FIN-FACT: A Benchmark Dataset for Multimodal Financial Fact Checking and Explanation Generation](https://arxiv.org/abs/2309.08793) Aman Rangapura, **Haoran Wang**, Ling Jian, Kai Shu [**GitHub**](https://github.com/IIT-DM/Fin-Fact) ![](https://img.shields.io/github/stars/IIT-DM/Fin-Fact) &nbsp;&nbsp; [![Leaderboard](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Dataset-blue)](https://huggingface.co/datasets/amanrangapur/Fin-Fact)

# 📖 Educations

- _2022 - Now_, Ph.D., Computer Science. Illinois Institute of Technology.
- _2021_, M.S., Computer Science. University of Oregon.
- _2019_, B.S., Computer Science. Purdue University.

# Academic Service

- **Session Chair:** CIKM 2024
- **Reviewer/Program Committee:** KDD{2024, 2025}, AAAI{2024, 2025}, PAKDD{2025}
- **Volunteer:** ACM FAccT 2023
- **External Reviewer:** SIGIR{2023, 2024}, WWW{2023, 2024}, TKDE{2023}, NIPS{2023, 2024}, ACL{2023, 2024}, ICDM{2023, 2024}, IJCAI{2023, 2024}, PAKDD2024, SDM{2025}

---

Last updated on Nov 15, 2024.

<a href="https://mapmyvisitors.com/web/1bweu"  title="Visit tracker"><img src="https://mapmyvisitors.com/map.png?d=SDWOZvjcEGQvmbkHt5vCf__HQwaniKPTjud79Y2vHsE&cl=ffffff" /></a>
