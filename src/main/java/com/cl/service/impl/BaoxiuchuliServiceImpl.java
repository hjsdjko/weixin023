package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.BaoxiuchuliDao;
import com.cl.entity.BaoxiuchuliEntity;
import com.cl.service.BaoxiuchuliService;
import com.cl.entity.view.BaoxiuchuliView;

@Service("baoxiuchuliService")
public class BaoxiuchuliServiceImpl extends ServiceImpl<BaoxiuchuliDao, BaoxiuchuliEntity> implements BaoxiuchuliService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<BaoxiuchuliEntity> page = this.selectPage(
                new Query<BaoxiuchuliEntity>(params).getPage(),
                new EntityWrapper<BaoxiuchuliEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<BaoxiuchuliEntity> wrapper) {
		  Page<BaoxiuchuliView> page =new Query<BaoxiuchuliView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<BaoxiuchuliView> selectListView(Wrapper<BaoxiuchuliEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public BaoxiuchuliView selectView(Wrapper<BaoxiuchuliEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
